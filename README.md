# Instruction

### About

Every tutorial starts with a todo list, and this is one of them with some customization for actual usability. The usability include deleting an item, setting a due date and showing a progress percentage of how many items were completed. See [Demo](https://ylu021.github.io/vue-mini/todo)

### Deploy
- `npm run build` to ensure the dist folder is out
- then add and push the subtree following below instructions
- useful resources include [distToDocs](http://blog.toast38coza.me/documenting-your-vuejs-project-with-github-pages/), [subfolder deploy tutorial](https://gist.github.com/belohlavek/61dd16c08cd9c57a168408b9ac4121c2)

> distToDocs is an approach when the project has a gitignore that ignored the dist folder, thus converting things to a docs folder


```
//in master
git add todo && git commit -m "add todo as subtree"
git subtree push -f --prefix todo origin gh-pages
//above failed, then tried
git checkout gh-pages
git checkout master -- todo
```
