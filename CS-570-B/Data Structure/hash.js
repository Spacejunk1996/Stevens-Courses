function HashTable() {

    var table = [];

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    var rehash = function (key) {
        
    }

    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }

   this.get = function (key) {
       return table[loseloseHashCode(key)];
   } 

   this.remove = function(key) {
       table[loseloseHashCode(key)] = undefined;
   }


}
var hash = new HashTable();
hash.put('Gandalf', 'gandallf@email.com')
hash.get('Gandalf');