1. git init(in particular folder)
2. git add <file1 path> <file2 path>
3. git commit -m 'title' -m 'discription'
4. git push
    * if you have not configured a remote branch
    * * git remote add add reponame repolink

    * if your branch does not exist on the remote server
    * * git push --set-upstream reponame branchname

    * if exists 
    * * git push origin main