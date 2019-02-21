function Dictionary () {

    var items = {};

    this.has = function (key) {
        return key in items;
    }

    this.set = function (key, value) {
        items[key] = value;
    }

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items);
    }

    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.pash(items[k]);
            }
        }
        return values;
    }

}

function Queue() {

    let items = [];

    this.enqueue = function(elememt) {
        items.push(elememt);
    }

    this.dequeue = function() {
        return itmes.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }

}

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge = function (v, w) {
        //console.log("adjList: "  + v + w +" "+ adjList.get(v));
        adjList.get(v).push(w);
        
        adjList.get(w).push(v);
    }



    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            callback && callback(u);
        }
        
    }

    this.toString = function() {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s +=vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    this.dijkstra = function (src) {
        var dist = [],
            visited = [];

        for (var i = 0; i < length; i++) {
            dist[i] = INF;
            visited[i] = false;
        }

        dist[src] = 0;

        for (var i = 0; i < length - 1; i++) {
            var u = minDistance(dist, visited);

            visited[u] = true;

            for(var v = 0; v < length; v++) {
                if(!visited[v] && this.graph[u][v] != 0 && dist[u] + this.graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + this.graph[u][v]; 
                }
            }
        }
        return dist;

    }


}

// var graph = new Graph();
// var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// for (var i = 0; i < myVertices.length; i ++) {
//     graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');