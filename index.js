const module = {
  debug: true
};

const Debug = () => {
  if(module.debug && arguments.length) {
    arguments.map((arg) => {
      console.log(arg);
    });
  }
};

const HelloWorld = () => {
  Debug('Hello World');
};

export {
  Debug,
  HelloWorld
};
