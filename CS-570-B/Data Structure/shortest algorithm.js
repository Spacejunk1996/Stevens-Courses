function Graph () {
    this.dijkstra = function (src,graph) {

        var dist = [], 
            visited = [],
            length = graph.length;
        for (var i = 0; i < length; i ++) {
            dist[i] = Infinity;
            visited[i] = false;
        }

        dist[src] = 0;

        for (var i = 0; i < length - 1; i ++) {
            var u = minDistance(dist, visited);
            visited[u] = true;
            for (var v = 0; v < length; v++) {
                if (!visited[v] && graph[u][v] != 0 && 
                    dist[u] != Infinity && 
                    dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        console.log(dist);
        return dist;
    }
    var minDistance = function (dist, visited) {
        var min = Infinity, minIndex = -1;

        for (var v = 0; v < dist.length; v++) {
            if (visited[v] == false && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}
var graph = [[0,2,4,0,0,0],
             [0,0,1,4,2,0],
             [0,0,0,0,3,0],
             [0,0,0,0,0,2],
             [0,0,0,3,0,2],
             [0,0,0,0,0,0]];

var g = new Graph();
g.dijkstra(1,graph);