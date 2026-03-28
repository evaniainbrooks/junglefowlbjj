import { Application } from "@hotwired/stimulus"
import ZoomController from "./stimulus_controllers/zoom_controller.js"

const application = Application.start()

application.register("zoom", ZoomController)

// Register controllers here as you add them, e.g.:
// import HelloController from "./stimulus_controllers/hello_controller.js"
// application.register("hello", HelloController)
