<?php

namespace ProcessMaker\Core;

class MultiProcOpen
{
    /**
     * Represents the waiting time before starting the process monitoring.
     * @var integer 
     */
    private $sleepTime = 1;

    /**
     * This method obtains a paging by returning the start and limit indexes 
     * compatible with the mysql pagination in its call function.
     * The return function must return an instance of the object "ProcessMaker\Core\ProcOpen".
     * Returns an array containing the status, content, and errors generated by 
     * the open process.
     * @param int $size
     * @param int $chunk
     * @param callable $callback
     * @return array
     */
    public function chunk(int $size, int $chunk, callable $callback): array
    {
        $start = 0;
        $limit = $chunk;
        $queries = [];
        for ($i = 1; $start < $size; $i++) {
            $queries[] = $callback($size, $start, $limit);
            $start = $i * $limit;
        }
        return $this->run($queries);
    }

    /**
     * Open a set of background processes.
     * The array must contain one or more instances of the object inherited from 
     * the class "ProcessMaker\Core\ProcOpen"
     * Returns an array containing the status, content, and errors generated by 
     * the open process.
     * @param array $processes
     * @return array
     */
    public function run(array $processes): array
    {
        foreach ($processes as $procOpen) {
            $procOpen->open();
        }
        return $this->processMonitoring($processes);
    }

    /**
     * It monitors the open processes, verifying if they have ended or thrown an 
     * error and later closing the resources related to the process.
     * Returns an array containing the status, content, and errors generated by 
     * the open process.
     * @param array $processes
     * @return array
     */
    private function processMonitoring(array $processes): array
    {
        sleep($this->sleepTime); //this sleep is very important
        $i = 0;
        $n = count($processes);
        $outputs = [];
        do {
            $index = $i % $n;
            if (isset($processes[$index])) {
                $procOpen = $processes[$index];
                $status = $procOpen->getStatus();
                $contents = $procOpen->getContents();
                $errors = $procOpen->getErrors();
                if ($status->running === false || !empty($errors)) {
                    $outputs[] = [
                        "status" => $status,
                        "contents" => $contents,
                        "errors" => $errors,
                    ];
                    $procOpen->terminate();
                    $procOpen->close();
                    unset($processes[$index]);
                }
            }
            $i = $i + 1;
        } while (!empty($processes));
        return $outputs;
    }
}
