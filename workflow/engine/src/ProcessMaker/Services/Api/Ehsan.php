<?php

namespace ProcessMaker\Services\Api;

use \ProcessMaker\Services\Api;
use \Luracast\Restler\RestException;

/**
 * File Api Controller
 *
 */
class Ehsan extends Api
{
    /**
     * Upload file.
     *
     * @url GET /test
     *
     *
     * @return array
     * @throws RestException
     *
     * @access public
     */
    public function doGetMyfamily()
    {
        try {
            $arr = ["ehsan" => "alvandi", "reza" => "hasani", "hasan" => "panahi"];
            return $arr;

        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }

    /**
     * get data from table.
     *
     * @url GET /list
     *
     *
     * @return array
     * @throws RestException
     *
     * @access public
     */
    public function doGetQuery()
    {
        try {
            $res = [];

//            $res = executeQuery("SELECT * FROM `additional_tables`");
            $query = "SELECT * FROM `ea_test`";
            if ($res = executeQuery($query))
                return $res;
            else
               return [$res=>"noResault"];

        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }

    /**
     * insert table.
     *
     * @url POST /insert
     *
     * @param array $request_data
     * @return array
     * @throws RestException
     *
     * @access public
     */
    public function doPostInsertQuery($request_data)
    {

        try {
            $res = [];
           $query = "INSERT INTO `ea_test` (`id`, `name` ,  `family`, `age` ) VALUES (NULL,  '".$request_data["name"] . "' , '".$request_data["family"] . "' , '".$request_data["age"] . "' )";
          if (executeQuery($query))
                $res['resault'] = "inserted !";
            else
                $res['resault'] = "can not insert data";

            return $res;
        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }


    /**
     * update table.
     *

     * @url PUT /update/{:uid}
     *
     * @param string $uid
     * @param array $request_data
     *
     * @return array
     * @throws RestException
     *
     * @access public
     */
    public function doPutUpdatetQuery($uid , $request_data)
    {
        try {
            $res = [];
           $query = "UPDATE `ea_test` SET `name` = '".$request_data["name"] . "', `family` = '".$request_data["family"] . "', `age` = '".$request_data["age"] . "' WHERE `ea_test`.`id` = '$uid'";
          if (executeQuery($query))
                $res['resault'] = "yes";
            else
                $res['resault'] = "no";

            return $res;
        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }





    /**
     * delete table.
     *

     * @url POST /delete/{:uid}
     *
     * @param string $uid
     *
     * @return array
     * @throws RestException
     *
     * @access public
     */
    public function doDeleteQuery($uid)
    {
        try {
            $res = [];
              $query = "delete from `ea_test` where  `ea_test`.`id` = '$uid'";
            if (executeQuery($query))
                $res['resault'] = "deleted!";
            else
                $res['resault'] = "can not delete!";

            return $res;
        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }





    /**
     * delete table.
     *

     * @url GET /info
     *
      *
     * @return array
     * @throws RestException
     *

      * @access protected
     * @class AccessControl {@permission PM_FACTORY}

     */
    public function doGetInformation()
    {
        try {

//            $UID = @@USER_LOGGED;
            $UID =  $this->getUserId();
            return ["res"=>$UID];

            $res = [];
            $result = executeQuery("SELECT * FROM USERS WHERE USR_UID='$UID'");
            if ( ($result)){
                $res['resault'] = ["UserFirstName" => $result[1]['USR_FIRSTNAME'] , "UserLastName" => $result[1]['USR_LASTNAME']];
            }
            else
                $res['resault'] = "no";

            return $res;

        } catch (\Exception $e) {
            //response
            throw new RestException(Api::STAT_APP_EXCEPTION, $e->getMessage());
        }
    }


}
