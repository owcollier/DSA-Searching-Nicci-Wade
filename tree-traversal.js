'use strict';

const BinarySearchTree = require('./binary-search-tree');

const bst = new BinarySearchTree();
const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

function createBst(data) {
  data.map(int => {
    bst.insert(int);
  });
}

function printInOrder(tree) {

  console.log('********** PRINTED IN-ORDER **********');

  function traversal(node) {
    if (node.left) {
      traversal(node.left);
    }

    console.log(node.key);
    
    if (node.right) {
      traversal(node.right);
    }

    return;
  }

  traversal(tree);
}

function printPreOrder(tree) {

  console.log('********** PRINTED PRE-ORDER **********');

  function traversal(node) {

    console.log(node.key);

    if (node.left) {
      traversal(node.left);
    }
    
    if (node.right) {
      traversal(node.right);
    }

    return;
  }

  traversal(tree);
}

function printPostOrder(tree) {

  console.log('********** PRINTED POST-ORDER **********');

  function traversal(node) {

    if (node.left) {
      traversal(node.left);
    }
    
    if (node.right) {
      traversal(node.right);
    }

    console.log(node.key);

    return;
  }

  traversal(tree);
}

function main() {
  createBst(data);
  printInOrder(bst);
  printPreOrder(bst);
  printPostOrder(bst);
}

main();