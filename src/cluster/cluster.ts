import cluster from 'cluster'
import os from 'os'

function clustering (callback: Function) {
  if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork()
    }
    cluster.on('disconnect', (worker) => {
      console.log('worker ' + worker.id + ' died')
    })
  } else {
    console.log('Worker spawned')
    callback()
  }
}

export default clustering
