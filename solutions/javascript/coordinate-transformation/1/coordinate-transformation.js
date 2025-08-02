
export function translate2d(dx, dy) {
    return function(x,y){
      return [x + dx, y+dy]

    }
  
}


export function scale2d(sx, sy) {
  return function(x,y){
    return [sx*x, sy*y]
  }
     
}



export function composeTransform(f, g) {
    return function(x, y) {
        const intermediateResult = f(x, y);
        return g(intermediateResult[0], intermediateResult[1]);
    };
}
export function memoizeTransform(f) {
    let lastArgs = null;
    let lastResult = null;

    return function(...args) {
        if (lastArgs && JSON.stringify(lastArgs) === JSON.stringify(args)) {
            return lastResult;
        } else {
            lastResult = f(...args);
            lastArgs = args;
            return lastResult;
        }
    };
}

