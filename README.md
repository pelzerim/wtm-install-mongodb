# How to install and run MongoDB

Quick explanation on how to install mongodb. Please make sure its running by testing it and ask for help if you should encounter any issues!

## Mac

The easiest way to install it, is to use Homebrew. Follow these steps (on your terminal)

1. Install Homebrew ([link](https://brew.sh/))
2. Install MongoDB `brew install mongodb`
3. Create a folder to save the data in `mkdir -p /data/db`
3. Run it `brew services start mongodb`

For more information refer to this [guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

## Windows

1. Download the MongoDB Community Edition (current release) from [here](https://www.mongodb.com/download-center?jmp=docs#production) and install it. **Make sure "Install MongoD as a Service" is checked.**
2. In your command line (cmd.exe) run `net start MongoDB` to make sure its running.

For more information and other way to run it, check out this [guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition).

## Linux

Please refer to the different linux guides on this [page](https://docs.mongodb.com/manual/administration/install-on-linux/). You want mongodb-org. It might look a little daunting, but you are just copy pasting commands in your shell.


# Test it

Run 

```
npm install
node index.js
```

You should see `You did it! Your MongoDB is running.`
