module.exports =
{
    apps :
    [
        {
            name: "eth-explorer",
            script: "./server.js",
            instances: "1",
            exec_mode: "cluster",
            env:
            {
                "NODE_ENV": "local"
            }
        }
    ]
}
