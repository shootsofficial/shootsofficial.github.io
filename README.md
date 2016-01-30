Shoots Official
---------------

We manage the code for our site on GitHub, and you'll need a GitHub account to work with it.

You'll start by forking the Shoots repo, making changes in a code editor, and commiting your changes via Git in your terminal.

Code contributions can be merged via pull requests.

Once reviewed, further changes may be necessary. If it's ready to go live, the pull request is approved and your code is merged into the master branch.

And that's how your changes go live!

Since our site uses `Jekyll` to manage its content, this git workflow is also how your posts go live. Cool!

Questions are welcome! Ping @jasonhargrove or jason@shootsofficial.com :)

```These docs are written for Mac users but should translate to Windows users with Google searches easily.```

Git + GitHub
---------------

We're pretty techy at Shoots, so you'll need to use Terminal to work with the site and blog.

1. Create an account at [GitHub](https://github.com)
2. If you're on Mac, open ```Terminal``` or ```iTerm```. One shortcut is to press `command+space` and type in ```Terminal``` into Spotlight Search. You will use terminal to setup and work with Git.
3. Setup Git (download and install git, and [configure it for your user name and email as shown in these docs](https://help.github.com/articles/set-up-git)) ```https://help.github.com/articles/set-up-git/```
4. Øptionally read [these GitHub docs](https://help.github.com/articles/fork-a-repo/) that are informative on what we're doing here now. ```https://help.github.com/articles/fork-a-repo```
5. Navigate to the [ShootsOfficial.com repo on GitHub](https://github.com/shootsofficial/shootsofficial.github.io) ```https://github.com/shootsofficial/shootsofficial.github.io```

```Heads-up: It's a good idea to secure your GitHub account using SSH Keys, and Two-factor Authentication. That's optional since our codebase is public, but recommended!```

Fork the Website Repo
---------------

The next step is to fork the Shoots repo using the GitHub website. This will make a copy of your own that you can work with.

1. Navigate to the [shootsofficial/shootsofficial.github.io](https://github.com/shootsofficial/shootsofficial.github.io) repository.
2. In the top-right corners of the page, click *Fork*.

Now we'll use your GitHub credentials to clone your fork to your local computer for editing.

In terminal, let's navigate to your documents folder.

At the terminal prompt, type this in, and press _enter_:

```
cd ~/documents
```

Let's take a look at this directory. Enter this:

```
ls
```
You will see some familiar-looking documents. We are going to download the Shoots site to this directory. You are welcome to use any directory you prefer!

Here is the address of the repo we will now clone:

```
https://github.com/{your github user name}/shootsofficial.github.io.git
```

If you are using SSH keys with GitHub (see security comments above), you can clone the site via SSH.

Here we will use the HTTP method. One drawback is that you may need your GitHub username and password. You may see prompts in Terminal, so keep your login info handy!

In your documents directory on Terminal, enter the clone command, with your own github username to complete the URL where indicated:

```
git clone https://github.com/{your github user name}/shootsofficial.github.io.git
```
When the download begins, you'll see some information in your terminal. When it's finished, type this:

```
ls
```

In the resulting list, you should see ```shootsofficial.github.io```. Let's navigate there:

```
cd shootsofficial.github.io
```

And take a look:

```
ls
```

`CNAME`
`_config.yml`
`_include`

You should see these listed and more. If you have Jekyll installed in your Terminal, you can go ahead and run this to see the website served locally:

```
jekyll serve
```

If you don't have jekyll yet, we'll sort you out soon. (This readme will be updated.) But first it's a good idea to decide how you will edit the code. Let's open up a code editor!

Code Editor
---------------

You can use terminal editors for changing code, but you're better off using a desktop app for that.

Two examples are:

1. [Sublime Text 3](http://www.sublimetext.com/3) (infinitely free with occassional nag)
2. [Brackets](http://brackets.io) (Pretty good free editor. Slower than Sublime.)

If you're keen, just go ahead and pay the $99 for Sublime. If you don't care, just keep hitting that `escape key` when it bugs you to pay.

These docs won't go into setting up projects in these apps, but don't be daunted! It ain't no thang, and Google will help.

Make a Change
---------------

```These docs are written first for the Shoots team for contributing to the site content and blog. Design and presentation changes use the same git flow, but will not be addressed here today.```

Let's make a small change to a blog post, and then take a look at what Git has to say.

1. In your code editor, open this file `/_posts/2016-01-26-montreal-fashion-week.markdown`
2. Scroll to the very bottom of the file, after all of the code, and click your mouse to position the cursor at the end.
3. Press `enter` to add a new line.
3. Save the document!

That's it. We've made our first change. Let's switch to the Terminal and see what's up with Git.

```
git status
```

You should see some stuff about the modified blog file.

Let's just go ahead and commit that change:

```
git commit -am "I'm making my first code change"
```

After you hit enter, you will see some confirmation text.

Now you're ready to push your changes up to GitHub, into your fork of the Shoots repo.

Enter this:

```
git push
```

You'll see some stuff about writing objects. Now your code is at GitHub!

We can now issue a ```pull request``` to propose merging these code changes back into the Shoots repository. If your changes are accepted and merged, your work will go live!!

Make a Pull Request
---------------

Back in your web browser, navigate to your fork of the Shoots repo in your GitHub account:

```
https://github.com/{your github user name}/shootsofficial.github.io
```

You should see a green button that says: ```New pull request```.

Click that!

Most likely the GitHub site will select the correct options by default.

You are proposing to merge your `head fork` `master` branch, into the `base fork` `master` branch.

The `base fork` is the Shoots repo. The `head fork` is your own fork of that repo.

If all is well, you should see some green (or red) changes in the code. If you used the `Make A Change` example above, you should see an extra line added to the bottom of the blog post. If you made other changes, you'll see that stuff here too.

The cool thing about this work flow is that you never have to stress too much about changing code.

Git and GitHub keeps track of every change, and sets it up so that mistakes in merging code can be easily fixed.

If you want to open the pull request, hit the big green button that says so.

(If you want to cancel, just do nothing and close the page.)

Making Blog Posts
---------------

In future commits I'll expand on editing the site with more detail in this README. In the meantime, I'll point you in the right direction!

To make blog posts just navigate to ```_posts``` in the main directory.

Duplicate one of the other posts and rename the file to match today's date, and a title for the post.

Open up that file in your code editor and make changes.

The area blocked out at the top of the file determines your post's settings.

The following area is the content. The content can be written using ```HTML```, and more simply using ```markdown```.

Here's [some help with markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

Once you make your changes, you'll need to add your new file to Git.

Do this:

```
git add --a
```

Now commit your code:

```
git commit -am 'Added a blog post about fashion photography!'
```

And then push it up to your fork repo:

```
git push
```

Now go to the fork on the GitHub website and ```open a pull request```.

And you're set :)

Good luck!

+

More information about Jekyll [can be found here](http://jekyllrb.com/).
