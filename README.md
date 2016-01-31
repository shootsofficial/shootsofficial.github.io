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

The next step is to fork the Shoots repo using the GitHub website.

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

In your documents directory on Terminal, enter this:

```
git clone https://github.com/shootsofficial/shootsofficial.github.io.git
```
When the download begins, you'll see some information in your terminal. When it's finished, type this:

```
ls
```

In the resulting list, you should see ```shootsofficial.github.io```. Let's navigate there:

```
cd shootsofficial.github.io
```

Now switch to the development branch:

```
git checkout development
```

And take a look:

```
CNAME
_config.yml
_include
etc
```
You should see these and more. If you have Jekyll install in your Terminal, you can go ahead and run this to see the website served locally:

```
jekyll serve
```

If you don't have jekyll yet, we'll sort you out soon. But first it's a good idea to decide how you will edit the code. Let's open up a code editor!

Code Editor
---------------

You can use terminal editors for changing code, but you're better off using a desktop app for that.

Two examples are:

1. [Sublime Text 3](http://www.sublimetext.com/3) (infinitely free with occassional nag)
2. [Brackets](http://brackets.io) (Pretty good free editor. Slower than Sublime.)

If you're keen, just go ahead and pay the $99 for Sublime. If you don't care, just keep hitting that `escape key` when it bugs you.

These docs won't go into setting up projects in these apps, but don't be daunted! It ain't no thang, and Google will help!

Make a Change
---------------

```These docs are written first for the Shoots team for contributing to the site content and blog. Design and presentation changes will all use the same git flow, but will not be addressed here today.```

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

If all is well, you should see some green (or red) changes in the code. In this example you may see an extra line you added at the bottom of a blog post. If you made other changes, you'd see that stuff here too.

The cool thing about this work flow is that you never have to stress too much about changing code.

Git and GitHub keeps track of every change, and sets it up so that mistakes in merging code can be easily fixed.

If you want to open the pull request, hit the big green button that says so.

(If you want to cancel, just do nothing and close the page.)

Making Blog Posts
---------------

In future commits I'll expand on this README. In the meantime, I'll point you in the right direction!

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

Setup (In Progress)
---------------

Some quick notes by Alanna about the workflow. 

Run the default Jekyll development server:

```
jekyll serve
```

Jekyll's default build process does a pretty good job but is lacking some features common to build a workflow. For example, minify code and optimizing images. 

To take us more to a production level we've added `gulp` and some associated modules. 

To work with gulp, we'll need `Node.js` and the `npm` package manager. 

To install, go to the Node website and download the newest version. Today that's `v5.5.0 Stable`. 

https://nodejs.org/en/

Once Node is installed, let's confirm that we have `npm` back in terminal. 

```
npm -v
```

You should see the version number appear. Today it says: `3.3.12`


Awesome! Now we can install `gulp` and our other dependencies. These are all listed in the `package.json` file. `npm` will read this file and install everything for you within your project. In the future, you can delete this directory any time, and reinstall the modules since it’s project specific.

But first, we’ll need to install `gulp` as a special case:

 ```
npm install gulp -g
```

(The `-g` means that you are installing `gulp` globally and it will work anywhere in your computer.)

Once it's done, go ahead and check to make sure it works. 

```
gulp -v
```
If it's installed correctly, it should output the version number. 

Now let's go ahead and install the other modules we need for this project. 

```
npm install
```

If all goes well, you may see some warnings about outdated modules, but otherwise no errors. If you do see errors, you may next want to run `npm install` as an administrator (`sudo npm install`).

Ok. Nearly there!


For the time-being, we have one `anti-pattern` step that is unique to our project. We need to create a `_private` directory, and inside it, a config file.

You can do this in your code editing program. Let’s do this now together in terminal:

```
mkdir _private
```

And now, create the file that we need:

```
touch _private/config.json
```

If you feel comfortable, you can use `nano` to edit this file in your terminal. Otherwise feel free to edit this in your code editing program. 

Here we will use `nano`:

```
nano _private/config.json
```

Please paste this JSON object into the document and save it:

```
{
  "kraken": {
    "key": "xxxx",
    "secret": "xxxx",
    "lossy": false,
    "resize": {
      "width": 1500,
      "height": 1500,
      "strategy": "auto"
    }
  }
}
```


If you are using a code editor, just hit `save`. If you are using `nano`, type `control + o` to save. It will ask you to confirm the file name, just press `enter`. 

Note the `xxxx` fields. We will need to add the Kraken API key and secret.

If you’re on the `Shoots` team, please see @jasonhargrove. If you are not, you’ll need to sign up for Kraken and add your own API key and secret.

https://kraken.io/signup

Once you have edited the key and secret, save the file again. After that, close it. In nano you can do that with `control + x`. 

At this point, you have everything you need to edit, build and deploy the site. 

```
NOTE TO SELF: add Jekyll setup here

```

Our gulp file runs various build and serving tasks, extending the tools that Jekyll provides. Let’s start by taking a look at some of the default Jekyll tools.

Let's serve the development version of the site with Jekyll:

```
jekyll serve
```

It should have confirmed that the server is running, with some instructions about how to stop it.

Now you can open your web browser and check out the site at this address:

```
http://127.0.0.1:4000
```

While the development server is running, any time you change the site code, it will rebuild for you. Basically, Jekyll takes all of your development files and processes them, creating a compiled version of the site in this directory: `_site`.

Go ahead and cancel the server by typing:

```
control + c
```

While the server was running, it ran the default build command for you. Go ahead and manually run that now:

```
jekyll build
```

If you look in the `_site` directory, you’ll see a pretty clean version of your files, near ready to ship to the live site. Unfortunately, the default tools do not go far enough to be considered “Production Ready”. And this is where `gulp` comes in.

On this site, we should not need to directly run the `jekyll serve` or `jekyll build` commands. We’ve wrapped those in `gulp` tasks, and added more.

Go ahead and try this:

```
gulp build
```

This gulp task runs the default jekyll build command for you, and then it post-processes the files. These tasks do a variety of things, such as minimizing HTML, CSS and JavaScript; and optimizing images.
 
For consistency, we have a gulp task for serving which does the same thing as the `jekyll serve` command.

```
gulp serve
```

Go ahead and open the browser again. To appreciate the difference between the development and production versions let’s right click on the page and “view source”.

You should see a clearly formatted version of the site code.  Nice and legible, for example:

```
<!DOCTYPE html>
<html>
<!-- The MVP of this site was developed with Jekyll -->
<!-- http://jekyllrb.com -->
<!-- Questions: contact@jasonhargrove.com, @jasonhargrove on Twitter -->

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shoots Official</title>
```

In production, we would expect a minified version of this code. Let’s run our production serve task and check that out.

Type `control + c` to cancel the current serve task.

And type:

```
gulp serve:production
```

This command will run `gulp build` for you, and replace the `_site` directory with the production-ready files.

It then opens a browser window with the site. Go ahead and look at the source code again. You should see that it is now minified.

(No white spaces!)

Go ahead and cancel that program back in your terminal:

```
control + c
```

And that's it! The next major step is `Deployment`. 


Deployment
---------------

The site is served by GitHub Pages, which will deploy the site automatically when you push to its `master` branch. With our new `gulp` workflow, we no longer need to do this via Pull Request. We can do this directly from the terminal.

Note that we still need to do Pull Requests and have team review, but once merged, you will need to deploy manually. We are now always working off of the `development` branch.

Once your code changes are approved do this:

```
gulp build
```
Once that is ready, go ahead and deploy.

```
gulp deploy:production
```
