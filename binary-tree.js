/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let start = this.root;
    function countBranch(node){
      if(!node) return 0
      return 1+countBranch(node.left)
    }
    return countBranch(start)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maxTravels = 0;

    // Helper function to recursively explore the tree.
    const findMaxPath = (node) => {
      if (!node) {
        return 0;
      }

      // Recursively calculate the maximum path sum for the left and right subtrees.
      const leftMax = Math.max(0, findMaxPath(node.left));
      const rightMax = Math.max(0, findMaxPath(node.right));

      // Calculate the maximum path that includes the current node.
      const currentMax = leftMax + rightMax;

      // Update the global maximum path if the current path is greater.
      maxTravels = Math.max(maxTravels, currentMax);

      // Return the maximum path sum that can be extended from this node.
      return 1 + Math.max(leftMax, rightMax);
    };

    // Start the traversal from the root node.
    if(!this.root) return 0
    findMaxPath(this.root);

    return maxTravels;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = Number.MIN_SAFE_INTEGER;

    // Helper function to recursively explore the tree.
    const findMaxPathSum = (node) => {
      if (!node) {
        return 0;
      }

      // Recursively calculate the maximum path sum for the left and right subtrees.
      const leftMax = Math.max(0, findMaxPathSum(node.left));
      const rightMax = Math.max(0, findMaxPathSum(node.right));

      // Calculate the maximum path sum that includes the current node.
      const currentMax = node.val + leftMax + rightMax;

      // Update the global maximum sum if the current path is greater.
      maxSum = Math.max(maxSum, currentMax);

      // Return the maximum path sum that can be extended from this node.
      return node.val + Math.max(leftMax, rightMax);
    };

    // Start the traversal from the root node.
    if(!this.root) return 0
    findMaxPathSum(this.root);

    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return null
    }
    let candidate = this.root.val

    function findNextLarger(node){
      if(!node) return null
      const lookLeft = findNextLarger(node.left)
      const lookRight = findNextLarger(node.right)
      candidate = node.val > lowerBound ? Math.min(node.val, candidate) : candidate
      return candidate
    }
    let search = findNextLarger(this.root)
    if(search == lowerBound){
      return null
    } else {
      return search
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
