/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }
    let q = this.root.children
    let sum = this.root.val
    function rec(q){
      if(q.length){
        const [current, ...rest] = q
        sum += current.val;
        if(current.children.length){
          return rec(current.children)
        }
        return rec(rest)
      }
      return
    }
    rec(q)
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0
    }
    let q = this.root.children
    let count = this.root.val % 2 == 0 ? 1 : 0
    function rec(q){
      if(q.length){
        const [current, ...rest] = q
        if(current.val % 2 == 0){
          count ++
        }
        if(current.children.length){
          return rec(current.children)
        }
        return rec(rest)
      }
      return
    }
    rec(q)
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0
    }
    let q = this.root.children
    let count = this.root.val > lowerBound ? 1 : 0
    function rec(q){
      if(q.length){
        const [current, ...rest] = q
        if(current.val > lowerBound){
          count ++
        }
        if(current.children.length){
          return rec(current.children)
        }
        return rec(rest)
      }
      return
    }
    rec(q)
    return count;
  }
}

module.exports = { Tree, TreeNode };
