import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["overlay", "zoomedImg"]

  open(event) {
    event.preventDefault()
    const src = event.currentTarget.dataset.fullSrc
    this.zoomedImgTarget.src = src
    this.overlayTarget.style.display = "flex"
    document.body.style.overflow = "hidden"
  }

  close() {
    this.overlayTarget.style.display = "none"
    this.zoomedImgTarget.src = ""
    document.body.style.overflow = ""
  }

  closeOnBackdrop(event) {
    if (event.target === this.overlayTarget) {
      this.close()
    }
  }

  keydown(event) {
    if (event.key === "Escape") this.close()
  }
}
