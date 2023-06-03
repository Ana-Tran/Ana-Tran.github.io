import React from "react";

export default function contact() {
  return (
    <div class="container" id="contact">
      <h2 class="pb-2 border-bottom">Contact Me</h2>
      <div class="form-col">
        <form class="w-50">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Jane Doe"
            />
          </div>

          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
