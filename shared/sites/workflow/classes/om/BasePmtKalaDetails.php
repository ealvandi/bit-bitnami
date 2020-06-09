<?php

require_once 'propel/om/BaseObject.php';

require_once 'propel/om/Persistent.php';


include_once 'propel/util/Criteria.php';

include_once 'classes/PmtKalaDetailsPeer.php';

/**
 * Base class that represents a row from the 'PMT_KALA_DETAILS' table.
 *
 * 
 *
 * @package    workflow.classes.om
 */
abstract class BasePmtKalaDetails extends BaseObject implements Persistent
{

    /**
     * The Peer class.
     * Instance provides a convenient way of calling static methods on a class
     * that calling code may not be able to identify.
     * @var        PmtKalaDetailsPeer
    */
    protected static $peer;

    /**
     * The value for the app_uid field.
     * @var        string
     */
    protected $app_uid;

    /**
     * The value for the app_number field.
     * @var        int
     */
    protected $app_number;

    /**
     * The value for the app_status field.
     * @var        string
     */
    protected $app_status;

    /**
     * The value for the row field.
     * @var        int
     */
    protected $row;

    /**
     * The value for the text0000000001 field.
     * @var        string
     */
    protected $text0000000001;

    /**
     * The value for the text0000000002 field.
     * @var        string
     */
    protected $text0000000002;

    /**
     * Flag to prevent endless save loop, if this object is referenced
     * by another object which falls in this transaction.
     * @var        boolean
     */
    protected $alreadyInSave = false;

    /**
     * Flag to prevent endless validation loop, if this object is referenced
     * by another object which falls in this transaction.
     * @var        boolean
     */
    protected $alreadyInValidation = false;

    /**
     * Get the [app_uid] column value.
     * 
     * @return     string
     */
    public function getAppUid()
    {

        return $this->app_uid;
    }

    /**
     * Get the [app_number] column value.
     * 
     * @return     int
     */
    public function getAppNumber()
    {

        return $this->app_number;
    }

    /**
     * Get the [app_status] column value.
     * 
     * @return     string
     */
    public function getAppStatus()
    {

        return $this->app_status;
    }

    /**
     * Get the [row] column value.
     * 
     * @return     int
     */
    public function getRow()
    {

        return $this->row;
    }

    /**
     * Get the [text0000000001] column value.
     * 
     * @return     string
     */
    public function getText0000000001()
    {

        return $this->text0000000001;
    }

    /**
     * Get the [text0000000002] column value.
     * 
     * @return     string
     */
    public function getText0000000002()
    {

        return $this->text0000000002;
    }

    /**
     * Set the value of [app_uid] column.
     * 
     * @param      string $v new value
     * @return     void
     */
    public function setAppUid($v)
    {

        // Since the native PHP type for this column is string,
        // we will cast the input to a string (if it is not).
        if ($v !== null && !is_string($v)) {
            $v = (string) $v;
        }

        if ($this->app_uid !== $v) {
            $this->app_uid = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::APP_UID;
        }

    } // setAppUid()

    /**
     * Set the value of [app_number] column.
     * 
     * @param      int $v new value
     * @return     void
     */
    public function setAppNumber($v)
    {

        // Since the native PHP type for this column is integer,
        // we will cast the input value to an int (if it is not).
        if ($v !== null && !is_int($v) && is_numeric($v)) {
            $v = (int) $v;
        }

        if ($this->app_number !== $v) {
            $this->app_number = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::APP_NUMBER;
        }

    } // setAppNumber()

    /**
     * Set the value of [app_status] column.
     * 
     * @param      string $v new value
     * @return     void
     */
    public function setAppStatus($v)
    {

        // Since the native PHP type for this column is string,
        // we will cast the input to a string (if it is not).
        if ($v !== null && !is_string($v)) {
            $v = (string) $v;
        }

        if ($this->app_status !== $v) {
            $this->app_status = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::APP_STATUS;
        }

    } // setAppStatus()

    /**
     * Set the value of [row] column.
     * 
     * @param      int $v new value
     * @return     void
     */
    public function setRow($v)
    {

        // Since the native PHP type for this column is integer,
        // we will cast the input value to an int (if it is not).
        if ($v !== null && !is_int($v) && is_numeric($v)) {
            $v = (int) $v;
        }

        if ($this->row !== $v) {
            $this->row = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::ROW;
        }

    } // setRow()

    /**
     * Set the value of [text0000000001] column.
     * 
     * @param      string $v new value
     * @return     void
     */
    public function setText0000000001($v)
    {

        // Since the native PHP type for this column is string,
        // we will cast the input to a string (if it is not).
        if ($v !== null && !is_string($v)) {
            $v = (string) $v;
        }

        if ($this->text0000000001 !== $v) {
            $this->text0000000001 = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::TEXT0000000001;
        }

    } // setText0000000001()

    /**
     * Set the value of [text0000000002] column.
     * 
     * @param      string $v new value
     * @return     void
     */
    public function setText0000000002($v)
    {

        // Since the native PHP type for this column is string,
        // we will cast the input to a string (if it is not).
        if ($v !== null && !is_string($v)) {
            $v = (string) $v;
        }

        if ($this->text0000000002 !== $v) {
            $this->text0000000002 = $v;
            $this->modifiedColumns[] = PmtKalaDetailsPeer::TEXT0000000002;
        }

    } // setText0000000002()

    /**
     * Hydrates (populates) the object variables with values from the database resultset.
     *
     * An offset (1-based "start column") is specified so that objects can be hydrated
     * with a subset of the columns in the resultset rows.  This is needed, for example,
     * for results of JOIN queries where the resultset row includes columns from two or
     * more tables.
     *
     * @param      ResultSet $rs The ResultSet class with cursor advanced to desired record pos.
     * @param      int $startcol 1-based offset column which indicates which restultset column to start with.
     * @return     int next starting column
     * @throws     PropelException  - Any caught Exception will be rewrapped as a PropelException.
     */
    public function hydrate(ResultSet $rs, $startcol = 1)
    {
        try {

            $this->app_uid = $rs->getString($startcol + 0);

            $this->app_number = $rs->getInt($startcol + 1);

            $this->app_status = $rs->getString($startcol + 2);

            $this->row = $rs->getInt($startcol + 3);

            $this->text0000000001 = $rs->getString($startcol + 4);

            $this->text0000000002 = $rs->getString($startcol + 5);

            $this->resetModified();

            $this->setNew(false);

            // FIXME - using NUM_COLUMNS may be clearer.
            return $startcol + 6; // 6 = PmtKalaDetailsPeer::NUM_COLUMNS - PmtKalaDetailsPeer::NUM_LAZY_LOAD_COLUMNS).

        } catch (Exception $e) {
            throw new PropelException("Error populating PmtKalaDetails object", $e);
        }
    }

    /**
     * Removes this object from datastore and sets delete attribute.
     *
     * @param      Connection $con
     * @return     void
     * @throws     PropelException
     * @see        BaseObject::setDeleted()
     * @see        BaseObject::isDeleted()
     */
    public function delete($con = null)
    {
        if ($this->isDeleted()) {
            throw new PropelException("This object has already been deleted.");
        }

        if ($con === null) {
            $con = Propel::getConnection(PmtKalaDetailsPeer::DATABASE_NAME);
        }

        try {
            $con->begin();
            PmtKalaDetailsPeer::doDelete($this, $con);
            $this->setDeleted(true);
            $con->commit();
        } catch (PropelException $e) {
            $con->rollback();
            throw $e;
        }
    }

    /**
     * Stores the object in the database.  If the object is new,
     * it inserts it; otherwise an update is performed.  This method
     * wraps the doSave() worker method in a transaction.
     *
     * @param      Connection $con
     * @return     int The number of rows affected by this insert/update
     * @throws     PropelException
     * @see        doSave()
     */
    public function save($con = null)
    {
        if ($this->isDeleted()) {
            throw new PropelException("You cannot save an object that has been deleted.");
        }

        if ($con === null) {
            $con = Propel::getConnection(PmtKalaDetailsPeer::DATABASE_NAME);
        }

        try {
            $con->begin();
            $affectedRows = $this->doSave($con);
            $con->commit();
            return $affectedRows;
        } catch (PropelException $e) {
            $con->rollback();
            throw $e;
        }
    }

    /**
     * Stores the object in the database.
     *
     * If the object is new, it inserts it; otherwise an update is performed.
     * All related objects are also updated in this method.
     *
     * @param      Connection $con
     * @return     int The number of rows affected by this insert/update and any referring
     * @throws     PropelException
     * @see        save()
     */
    protected function doSave($con)
    {
        $affectedRows = 0; // initialize var to track total num of affected rows
        if (!$this->alreadyInSave) {
            $this->alreadyInSave = true;


            // If this object has been modified, then save it to the database.
            if ($this->isModified()) {
                if ($this->isNew()) {
                    $pk = PmtKalaDetailsPeer::doInsert($this, $con);
                    $affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
                                         // should always be true here (even though technically
                                         // BasePeer::doInsert() can insert multiple rows).

                    $this->setNew(false);
                } else {
                    $affectedRows += PmtKalaDetailsPeer::doUpdate($this, $con);
                }
                $this->resetModified(); // [HL] After being saved an object is no longer 'modified'
            }

            $this->alreadyInSave = false;
        }
        return $affectedRows;
    } // doSave()

    /**
     * Array of ValidationFailed objects.
     * @var        array ValidationFailed[]
     */
    protected $validationFailures = array();

    /**
     * Gets any ValidationFailed objects that resulted from last call to validate().
     *
     *
     * @return     array ValidationFailed[]
     * @see        validate()
     */
    public function getValidationFailures()
    {
        return $this->validationFailures;
    }

    /**
     * Validates the objects modified field values and all objects related to this table.
     *
     * If $columns is either a column name or an array of column names
     * only those columns are validated.
     *
     * @param      mixed $columns Column name or an array of column names.
     * @return     boolean Whether all columns pass validation.
     * @see        doValidate()
     * @see        getValidationFailures()
     */
    public function validate($columns = null)
    {
        $res = $this->doValidate($columns);
        if ($res === true) {
            $this->validationFailures = array();
            return true;
        } else {
            $this->validationFailures = $res;
            return false;
        }
    }

    /**
     * This function performs the validation work for complex object models.
     *
     * In addition to checking the current object, all related objects will
     * also be validated.  If all pass then <code>true</code> is returned; otherwise
     * an aggreagated array of ValidationFailed objects will be returned.
     *
     * @param      array $columns Array of column names to validate.
     * @return     mixed <code>true</code> if all validations pass; 
                   array of <code>ValidationFailed</code> objects otherwise.
     */
    protected function doValidate($columns = null)
    {
        if (!$this->alreadyInValidation) {
            $this->alreadyInValidation = true;
            $retval = null;

            $failureMap = array();


            if (($retval = PmtKalaDetailsPeer::doValidate($this, $columns)) !== true) {
                $failureMap = array_merge($failureMap, $retval);
            }



            $this->alreadyInValidation = false;
        }

        return (!empty($failureMap) ? $failureMap : true);
    }

    /**
     * Retrieves a field from the object by name passed in as a string.
     *
     * @param      string $name name
     * @param      string $type The type of fieldname the $name is of:
     *                     one of the class type constants TYPE_PHPNAME,
     *                     TYPE_COLNAME, TYPE_FIELDNAME, TYPE_NUM
     * @return     mixed Value of field.
     */
    public function getByName($name, $type = BasePeer::TYPE_PHPNAME)
    {
        $pos = PmtKalaDetailsPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
        return $this->getByPosition($pos);
    }

    /**
     * Retrieves a field from the object by Position as specified in the xml schema.
     * Zero-based.
     *
     * @param      int $pos position in xml schema
     * @return     mixed Value of field at $pos
     */
    public function getByPosition($pos)
    {
        switch($pos) {
            case 0:
                return $this->getAppUid();
                break;
            case 1:
                return $this->getAppNumber();
                break;
            case 2:
                return $this->getAppStatus();
                break;
            case 3:
                return $this->getRow();
                break;
            case 4:
                return $this->getText0000000001();
                break;
            case 5:
                return $this->getText0000000002();
                break;
            default:
                return null;
                break;
        } // switch()
    }

    /**
     * Exports the object as an array.
     *
     * You can specify the key type of the array by passing one of the class
     * type constants.
     *
     * @param      string $keyType One of the class type constants TYPE_PHPNAME,
     *                        TYPE_COLNAME, TYPE_FIELDNAME, TYPE_NUM
     * @return     an associative array containing the field names (as keys) and field values
     */
    public function toArray($keyType = BasePeer::TYPE_PHPNAME)
    {
        $keys = PmtKalaDetailsPeer::getFieldNames($keyType);
        $result = array(
            $keys[0] => $this->getAppUid(),
            $keys[1] => $this->getAppNumber(),
            $keys[2] => $this->getAppStatus(),
            $keys[3] => $this->getRow(),
            $keys[4] => $this->getText0000000001(),
            $keys[5] => $this->getText0000000002(),
        );
        return $result;
    }

    /**
     * Sets a field from the object by name passed in as a string.
     *
     * @param      string $name peer name
     * @param      mixed $value field value
     * @param      string $type The type of fieldname the $name is of:
     *                     one of the class type constants TYPE_PHPNAME,
     *                     TYPE_COLNAME, TYPE_FIELDNAME, TYPE_NUM
     * @return     void
     */
    public function setByName($name, $value, $type = BasePeer::TYPE_PHPNAME)
    {
        $pos = PmtKalaDetailsPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
        return $this->setByPosition($pos, $value);
    }

    /**
     * Sets a field from the object by Position as specified in the xml schema.
     * Zero-based.
     *
     * @param      int $pos position in xml schema
     * @param      mixed $value field value
     * @return     void
     */
    public function setByPosition($pos, $value)
    {
        switch($pos) {
            case 0:
                $this->setAppUid($value);
                break;
            case 1:
                $this->setAppNumber($value);
                break;
            case 2:
                $this->setAppStatus($value);
                break;
            case 3:
                $this->setRow($value);
                break;
            case 4:
                $this->setText0000000001($value);
                break;
            case 5:
                $this->setText0000000002($value);
                break;
        } // switch()
    }

    /**
     * Populates the object using an array.
     *
     * This is particularly useful when populating an object from one of the
     * request arrays (e.g. $_POST).  This method goes through the column
     * names, checking to see whether a matching key exists in populated
     * array. If so the setByName() method is called for that column.
     *
     * You can specify the key type of the array by additionally passing one
     * of the class type constants TYPE_PHPNAME, TYPE_COLNAME, TYPE_FIELDNAME,
     * TYPE_NUM. The default key type is the column's phpname (e.g. 'authorId')
     *
     * @param      array  $arr     An array to populate the object from.
     * @param      string $keyType The type of keys the array uses.
     * @return     void
     */
    public function fromArray($arr, $keyType = BasePeer::TYPE_PHPNAME)
    {
        $keys = PmtKalaDetailsPeer::getFieldNames($keyType);

        if (array_key_exists($keys[0], $arr)) {
            $this->setAppUid($arr[$keys[0]]);
        }

        if (array_key_exists($keys[1], $arr)) {
            $this->setAppNumber($arr[$keys[1]]);
        }

        if (array_key_exists($keys[2], $arr)) {
            $this->setAppStatus($arr[$keys[2]]);
        }

        if (array_key_exists($keys[3], $arr)) {
            $this->setRow($arr[$keys[3]]);
        }

        if (array_key_exists($keys[4], $arr)) {
            $this->setText0000000001($arr[$keys[4]]);
        }

        if (array_key_exists($keys[5], $arr)) {
            $this->setText0000000002($arr[$keys[5]]);
        }

    }

    /**
     * Build a Criteria object containing the values of all modified columns in this object.
     *
     * @return     Criteria The Criteria object containing all modified values.
     */
    public function buildCriteria()
    {
        $criteria = new Criteria(PmtKalaDetailsPeer::DATABASE_NAME);

        if ($this->isColumnModified(PmtKalaDetailsPeer::APP_UID)) {
            $criteria->add(PmtKalaDetailsPeer::APP_UID, $this->app_uid);
        }

        if ($this->isColumnModified(PmtKalaDetailsPeer::APP_NUMBER)) {
            $criteria->add(PmtKalaDetailsPeer::APP_NUMBER, $this->app_number);
        }

        if ($this->isColumnModified(PmtKalaDetailsPeer::APP_STATUS)) {
            $criteria->add(PmtKalaDetailsPeer::APP_STATUS, $this->app_status);
        }

        if ($this->isColumnModified(PmtKalaDetailsPeer::ROW)) {
            $criteria->add(PmtKalaDetailsPeer::ROW, $this->row);
        }

        if ($this->isColumnModified(PmtKalaDetailsPeer::TEXT0000000001)) {
            $criteria->add(PmtKalaDetailsPeer::TEXT0000000001, $this->text0000000001);
        }

        if ($this->isColumnModified(PmtKalaDetailsPeer::TEXT0000000002)) {
            $criteria->add(PmtKalaDetailsPeer::TEXT0000000002, $this->text0000000002);
        }


        return $criteria;
    }

    /**
     * Builds a Criteria object containing the primary key for this object.
     *
     * Unlike buildCriteria() this method includes the primary key values regardless
     * of whether or not they have been modified.
     *
     * @return     Criteria The Criteria object containing value(s) for primary key(s).
     */
    public function buildPkeyCriteria()
    {
        $criteria = new Criteria(PmtKalaDetailsPeer::DATABASE_NAME);

        $criteria->add(PmtKalaDetailsPeer::APP_UID, $this->app_uid);
        $criteria->add(PmtKalaDetailsPeer::ROW, $this->row);

        return $criteria;
    }

    /**
     * Returns the composite primary key for this object.
     * The array elements will be in same order as specified in XML.
     * @return     array
     */
    public function getPrimaryKey()
    {
        $pks = array();

        $pks[0] = $this->getAppUid();

        $pks[1] = $this->getRow();

        return $pks;
    }

    /**
     * Set the [composite] primary key.
     *
     * @param      array $keys The elements of the composite key (order must match the order in XML file).
     * @return     void
     */
    public function setPrimaryKey($keys)
    {

        $this->setAppUid($keys[0]);

        $this->setRow($keys[1]);

    }

    /**
     * Sets contents of passed object to values from current object.
     *
     * If desired, this method can also make copies of all associated (fkey referrers)
     * objects.
     *
     * @param      object $copyObj An object of PmtKalaDetails (or compatible) type.
     * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
     * @throws     PropelException
     */
    public function copyInto($copyObj, $deepCopy = false)
    {

        $copyObj->setAppNumber($this->app_number);

        $copyObj->setAppStatus($this->app_status);

        $copyObj->setText0000000001($this->text0000000001);

        $copyObj->setText0000000002($this->text0000000002);


        $copyObj->setNew(true);

        $copyObj->setAppUid(NULL); // this is a pkey column, so set to default value

        $copyObj->setRow(NULL); // this is a pkey column, so set to default value

    }

    /**
     * Makes a copy of this object that will be inserted as a new row in table when saved.
     * It creates a new object filling in the simple attributes, but skipping any primary
     * keys that are defined for the table.
     *
     * If desired, this method can also make copies of all associated (fkey referrers)
     * objects.
     *
     * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
     * @return     PmtKalaDetails Clone of current object.
     * @throws     PropelException
     */
    public function copy($deepCopy = false)
    {
        // we use get_class(), because this might be a subclass
        $clazz = get_class($this);
        $copyObj = new $clazz();
        $this->copyInto($copyObj, $deepCopy);
        return $copyObj;
    }

    /**
     * Returns a peer instance associated with this om.
     *
     * Since Peer classes are not to have any instance attributes, this method returns the
     * same instance for all member of this class. The method could therefore
     * be static, but this would prevent one from overriding the behavior.
     *
     * @return     PmtKalaDetailsPeer
     */
    public function getPeer()
    {
        if (self::$peer === null) {
            self::$peer = new PmtKalaDetailsPeer();
        }
        return self::$peer;
    }
}

