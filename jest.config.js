module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/ts-algorithms"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
};
