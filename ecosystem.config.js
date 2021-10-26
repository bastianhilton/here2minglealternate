module.exports = {
  "apps": [
    {
      "name": "here2mingle",
      "cwd": "../alternatemingle",
      "args": ["runserver", "0.0.0.0:8088"], 
      "script": "manage.py",
      "exec_mode": "fork",
      "exec_interpreter": "python"
    },
    /*{
      "name": "graphqlmesh",
      "cwd": "../alternate-cms",
      "args": ["yarn", "mesh", "0.0.0.0:4000"],
      "script": "dev",
    }*/
  ]
}