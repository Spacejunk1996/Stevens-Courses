function Vector(cap)
{ 
        this.elementData  = new Array(cap);
        this.elementCount = 0;
       
        this.add             = vectorAdd;
        this.capacity        = new Function("return this.elementData.length");
        this.clear           = vectorClear;
        this.contains        = vectorContains;
        this.copyInto        = vectorCopyInto;
        this.elementAt       = vectorElementAt;
        this.ensureCapacity  = vectorEnsureCapacity;
        this.firstElement    = vectorFirstElement;
        this.indexOf         = vectorIndexOf;
        this.insertElementAt = vectorInsertElementAt;
        this.isEmpty         = vectorIsEmpty;
        this.lastElement     = vectorLastElement;
        this.lastIndexOf     = vectorLastIndexOf;
        this.removeElement   = vectorRemoveElement;
        this.removeElementAt = vectorRemoveElementAt;
        this.removeRange     = vectorRemoveRange;
        this.size            = new Function("return this.elementCount");
        this.trimToSize      = vectorTrimToSize;
        
}

function vectorAdd(obj)
{
        this.elementData[this.elementCount++] = obj;
}

function vectorClear()
{
        for(var i = 0;i < this.elementCount;i++)
        {
               this.elementData[i] = null;
        }
}

function vectorContains(obj)
{
        if(this.indexOf(obj) >= 0)
           return true;
        else
           return false;
}

function vectorCopyInto(arr)
{
        for(var i = this.elementCount;i < arr.length;i++)
        {
               this.elementData[i] = arr[i];
        }
}

function vectorElementAt(index)
{
        return this.elementData[index];
}

function vectorEnsureCapacity(cap)
{
        if(cap < this.elementData.length)
        {
            for(var i = 0; i < cap;i++)
            {
                   if(this.elementData[i] == null)
                          this.elementData[i] = "";
            }
            
        }
}

function vectorFirstElement()
{
        if(this.elementCount > 0)
               return this.elementData[0];
}

function vectorIndexOf(obj)
{
        var m;
        for(var i = 0;i < this.elementCount;i++)
        {
               m=true;
               for(var p in obj)
               {
                    if(obj[p]!= this.elementData[i][p])
                    {
                          m=false;
                          break;
                    }
               }
               if(m)
                  return i;
        }
        return -1
}

function vectorInsertElementAt(obj,index)
{
        for(var i = this.elementCount;i >= index; i--)
        {
               this.elementData[i + 1] = this.elementData[i];
        }
        this.elementData[index] = obj;
        this.elementCount++;
}

function vectorIsEmpty()
{
        if(this.elementCount == 0)
            return true;
        else
            return false;
}
    
function vectorLastElement()
{
        if(this.elementCount > 0)
               return this.elementData[this.elementCount - 1];
}

function vectorLastIndexOf(obj)
{       var m;
        for(var i = this.elementCount;i > 0;i--)
        {
               m = true;
               for(var p in obj)
               {
                     if(this.elementData[i][p] != obj[p])
                     {
                        m = false;
                        break;
                     }
               }
               if(m)
                return i;
        }
        return -1
} 

function vectorRemoveElement(obj)
{       
        var i = this.indexOf(obj);
        
        this.removeElementAt(i);
}

function vectorRemoveElementAt(index)
{
        this.elementData[index] = "";
        
        for(var i = index;i < this.elementCount;i++)
        {
               this.elementData[i] = this.elementData[i + 1];
        }
        this.elementCount--;
}

function vectorRemoveRange(start,end)
{
        var moveUp   = false;
        var moveUpTo = start;
        
        for(var i = start;i < end;i ++)
        {
               this.elementData[i] = null;
        }
        
        for(var i = end,moveUpTo;i < this.elementCount;i++,moveUpTo++)
        {
               this.elementData[moveUpTo] = this.elementData[i];
        }
        
        this.elementCount -= (end - start);
}

function vectorTrimToSize(cap)
{
        for(var i = cap;i < this.element.length;i++)
        {
               this.elementData[i] = null;
        }
}