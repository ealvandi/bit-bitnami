<?php
$dbAdapter    = 'mysql';
$dbHost       = '127.0.0.1';
$dbName       = 'bitnami_pm';
$dbUser       = 'bn_processmaker';
$dbPass       = 'd022135bfd';
$dbRbacHost   = '127.0.0.1';
$dbRbacName   = 'bitnami_pm';
$dbRbacUser   = 'bn_processmaker';
$dbRbacPass   = 'd022135bfd';
$dbReportHost = '127.0.0.1';
$dbReportName = 'bitnami_pm';
$dbReportUser = 'bn_processmaker';
$dbReportPass = 'd022135bfd';


$dsn       = sprintf("%s://%s:%s@%s/%s", $dbAdapter, $dbUser,       $dbPass,       $dbHost,       $dbName);
$dsnRbac   = sprintf("%s://%s:%s@%s/%s", $dbAdapter, $dbRbacUser,   $dbRbacPass,   $dbRbacHost,   $dbRbacName);
$dsnReport = sprintf("%s://%s:%s@%s/%s", $dbAdapter, $dbReportUser, $dbReportPass, $dbReportHost, $dbReportName);

switch ($dbAdapter) {
  case 'mysql':
    $dsn       .= '?encoding=utf8';
    $dsnRbac   .= '?encoding=utf8';
    $dsnReport .= '?encoding=utf8';
    break;
  default:
    break;
}

$pro ['datasources']['workflow']['connection'] = $dsn;
$pro ['datasources']['workflow']['adapter'] = $dbAdapter;

$pro ['datasources']['rbac']['connection'] = $dsnRbac;
$pro ['datasources']['rbac']['adapter'] = $dbAdapter;

$pro ['datasources']['rp']['connection'] = $dsnReport;
$pro ['datasources']['rp']['adapter'] = $dbAdapter;

$pro ['datasources']['dbarray']['connection'] = 'dbarray://user:pass@localhost/pm_os';
$pro ['datasources']['dbarray']['adapter']    = 'dbarray';

return $pro;