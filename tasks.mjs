
class Tasks {
	constructor(log, tasks) {
		this.log = log
		this.tasks = tasks
	}
	run(name, argv) {
		this.tasks[name](argv.slice(1)).catch((err) => {
			this.log.error(err)
		})
	}
}

export default Tasks
