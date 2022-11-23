# Reminder Notes

### markdown
[README](/README.md)    
[BRIEF](/resources/BRIEF.md)  

## git
> creating a new `feature-branch`:  
`$ git checkout -b <new-feature-branch>`

> git merge:  
**_assumes that the start point is in the `new-feature-branch`_**  
`$ git checkout main`  
**_checking just in case_**  
`$ git status`  
**_merging `new-feature-branch` **into** `main`_**  
`$ git merge <new-feature-branch>`
* **note:** want to make an `onMerge` workflow

> git push:  
**_assumes that the start point is in the branch we want to `push`_**  
`$ git push -u origin <remote-branch>`
* **note:** I want `onPush` workflow to deploy to the hosting service    

## ..
