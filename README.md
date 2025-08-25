# DSA TypeScript Library

A comprehensive Data Structures and Algorithms library implemented in TypeScript with detailed explanations, multiple solution approaches, and extensive test coverage.

## 🚀 Features

- **Type-Safe**: Written in TypeScript with strict type checking
- **Well-Documented**: Each algorithm includes problem description, examples, and complexity analysis
- **Multiple Solutions**: Different approaches for each problem (when applicable)
- **Test Coverage**: Comprehensive test suite using Jest
- **Code Quality**: ESLint and Prettier for consistent code style
- **CI/CD Ready**: GitHub Actions workflow included

## 📁 Project Structure

```
src/
├── arrays-and-hashmaps/     # Array and HashMap problems
├── linked-lists/            # Linked List problems
├── trees/                   # Tree problems (Binary Trees, BST, etc.)
├── graphs/                  # Graph algorithms (DFS, BFS, etc.)
├── dynamic-programming/     # DP problems
├── sorting-and-searching/   # Sorting and Binary Search
├── utils/                   # Utility functions
└── index.ts                 # Main export file
```

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dsa-typescript-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run dev` | Watch mode for development |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Check code style with ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 📚 Categories

### Arrays & HashMaps
- [x] Top K Frequent Elements
- [ ] Two Sum
- [ ] Group Anagrams
- [ ] Valid Anagram
- [ ] Contains Duplicate

### Linked Lists
- [ ] Reverse Linked List
- [ ] Merge Two Sorted Lists
- [ ] Linked List Cycle
- [ ] Remove Nth Node From End

### Trees
- [ ] Maximum Depth of Binary Tree
- [ ] Same Tree
- [ ] Invert Binary Tree
- [ ] Binary Tree Level Order Traversal

### Graphs
- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Course Schedule
- [ ] Pacific Atlantic Water Flow

### Dynamic Programming
- [ ] Climbing Stairs
- [ ] House Robber
- [ ] Coin Change
- [ ] Longest Increasing Subsequence

### Sorting & Searching
- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Binary Search
- [ ] Search in Rotated Sorted Array

## 🎯 Problem Template

Each problem follows this structure:

```typescript
/**
 * Problem: [Problem Name]
 * 
 * [Problem Description]
 * 
 * Example:
 * Input: [example input]
 * Output: [example output]
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

export function solutionName(params: type): returnType {
  // Implementation
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-problem`
3. Add your solution with tests
4. Ensure all tests pass: `npm test`
5. Check code style: `npm run lint`
6. Commit your changes: `git commit -m 'Add new problem solution'`
7. Push to the branch: `git push origin feature/new-problem`
8. Submit a pull request

## 📋 Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript strict mode** for type safety

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 Learning Resources

- [LeetCode](https://leetcode.com/)
- [NeetCode](https://neetcode.io/)
- [AlgoExpert](https://www.algoexpert.io/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)

## 👤 Author

**Muhammad Afnan**

---

Happy coding! 🎉
