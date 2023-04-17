const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
const {assert} = require("chai");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 * @description Из важных особенностей: в методах довольно много рекурсивных функций:
 *              >10 раз разные функции рекурсивно вызываются.
 *              <br>В рекурсивных функциях важно, чтобы был корректно реализован
 *              способ остановить рекурсивное выполнение, иначе будет бесконечное
 *              рекурсивное выполнение и программа сломается.
*/
class BinarySearchTree {

  rootNode;

  lastFoundNode;

  // В конструкторе создаём пустое дерево. В нём будет только пустой корень
  // ссылка на корень = null.
  // Constructor for node: '../extensions/list-tree.js'.
  constructor() {
    this.rootNode = null;
    this.lastFoundNode = null;
  }
  /**
   * Метод для добавления новых значений в дерево.
   * @param data  {*} - добавляемый элемент.
   * @description       Содержит рекурсивные функции!
   */
  add(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    // Указателю корня (корню) присваиваем результат функции добавления узла, которой
    // в качестве узла (поддерева) указываем указатель корня текущий
    // и указываем значение узла.
    // Функция описывает общую логику как для дерева, так и для поддерева.
    this.rootNode = addLocal(this.rootNode, data);

    // Локальная рекурсивная функция добавления узла с новым значением.
    function addLocal(node, nodeData) {
      // Условие выхода из рекурсии: если в текущей позиции узла нет,
      // то добавляем в эту позицию новый узел с новым значением. Для этого
      // создаём объект, использую конструктор Node() из подключенного файла.
      if (node === null) {
        return new Node(nodeData);
      }

      // Если такой узел уже существует - есть узел с таким же значением -
      // тогда мы ничего не меняем - возвращаем тот же самый узел, прерывая
      // рекурсивное выполнение функции.
      if (node.data === nodeData) {
        return node;
      }

      // Если значение текущего узла меньше, чем то значение, узел с которым мы
      // должны добавить, то тогда вызываем рекурсивно функцию. В теле этой функции
      // мы и находимся. В качестве аргумента указываем левый указатель и значение,
      // которое добавляем. (Идём по дереву налево).
      if (nodeData < node.data) {
        // К левому потомку благодаря рекурсии положим либо новый узел, либо сам себя,
        // либо дальше идём по ветке, положив всю структуру обратно.
        node.left = addLocal(node.left, nodeData);
      } else {
        // Иначе (сработает, только если значение новое больше значения текущего узла,
        // так как равенство мы ещё выше проверили)
        // вызываем рекурсивно функцию ту же функцию, но в качестве аргумента
        // указываем правый указатель и значение которое добавляем.
        // (Идём по дереву направо).
        // К правому потомку благодаря рекурсии положим либо новый узел, либо сам себя,
        // либо дальше идём по ветке, положив всю структуру обратно.
        node.right = addLocal(node.right, nodeData);
      }

      // Возвращаем текущий узел.
      return node;
    }
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    return this.rootNode;

  }

  /**
   * Метод для проверки, есть ли уже в дереве некоторый элемент.
   * @param     data                        - искомый элемент.
   * @param     updLastSearch   {Boolean}   - обновить поле для хранения последней найденной ноды.
   * @returns   {boolean|boolean|*}
   * @description Содержит рекурсивные функции!
   */
  has(data, updLastSearch = false) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    // В return вызываем функцию локальную для метода, которая
    // содержит рекурсивные вызовы самой себя и условия выходя из рекурсии.
    return searchLocal(this.rootNode, data, this);

    // Локальная функция рекурсивная для поиска элемента в дереве.
    function searchLocal(node, value, context = undefined) {
      // Если пришли туда, где узла нет, то прекращаем выполнение и возвращаем false,
      // так как это будет значить, что мы прошли по нужной ветке и не нашли искомый
      // элемент.
      if (node === null) {
        return false;
      }

      // Если значение текущего узла равно искомому значению, то прерываем выполнение
      // и возвращаем true. Срабатывания этого условия и означает, что элемент
      // искомый есть в анализируемом дереве.
      if (node.data === value) {
        context.lastFoundNode = node;
        return true;
      }

      // Если узел есть, но он не совпадает с искомым, тогда сравним его с искомым
      // значением. Если искомое значение меньше значения узла - идём по левой ветке,
      // рекурсивно вызывая функцию, в теле которой и находимся,
      // с аргументами левый указатель текущего узла и значением искомым.
      // Если искомое значение больше значения узла, идём по правой ветке,
      // рекурсивно вызывая функцию, в теле которой и находимся,
      // с аргументами правый указатель текущего узла и значением искомым.
      if (value < node.data) {
        return searchLocal(node.left, value, context);
      } else {
        return searchLocal(node.right, value, context);
      }

    }

  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    // Check, that element exist
    if (this.has(data, true)) {
      return this.lastFoundNode;
    } else {
      return null;
    }


  }

  /**
   * Метод для удаления искомого узла.
   * @param data - искомый элемент.
   */
  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    // TODO...

  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"
// npm run test ./test/binary-search-tree.test.js  > "./logs/log_binary_search_tree_test_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"

// const tree = new BinarySearchTree();
// console.log(tree.root());

// const tree = new BinarySearchTree();
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// tree.find(8);
// tree.find(2);
// tree.find(32);
// tree.find(14);

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14));
console.log(tree.has(8));
console.log(tree.has(9));
console.log(tree.has(2));
console.log(tree.has(6));
console.log(tree.has(128));
console.log(tree.has(31));
console.log(tree.has(54));
console.log(tree.has(1));

module.exports = {
  BinarySearchTree
};