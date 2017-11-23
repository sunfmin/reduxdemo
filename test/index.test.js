"use strict";
var index = require("../dist/index.js");
describe("reducers test", () => {
  it("reducers add todo", () => {
    var result = index.todos([], {
      type: "ADD_TODO",
      id: 1,
      text: "Learn Redux",
      completed: false
    });
    expect(result).toMatchObject([
      {
        id: 1,
        text: "Learn Redux",
        completed: false
      }
    ]);
  });

  it("reducers toggle todo", () => {
    var result = index.todos(
      [
        {
          id: 1,
          text: "Learn Go",
          completed: false
        },
        {
          id: 2,
          text: "Learn Redux",
          completed: true
        }
      ],
      {
        type: "TOGGLE_TODO",
        id: 2
      }
    );

    expect(result).toMatchObject([
      {
        id: 1,
        text: "Learn Go",
        completed: false
      },
      {
        id: 2,
        text: "Learn Redux",
        completed: false
      }
    ]);
  });
});
