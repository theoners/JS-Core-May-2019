(function() {
    function add (vec1, vec2) {
        return vec1.map((x,i)=>x+vec2[i]);
    }

    function multiply (vec1, scalar) {
        return vec1.map(x=>x*scalar);
    }

    function length (vec1) {
        return Math.sqrt(vec1.map(x=>x*x).reduce((a,b)=>a+b));
    }

    function dot (vec1, vec2) {
        return vec1.map((x,i)=>x*vec2[i]).reduce((a,b)=>a+b);
    }

    function cross (vec1, vec2) {
        return vec1.map((x,i)=>x*vec2[vec2.length-i-1]).reduce((a,b)=>a-b);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();


