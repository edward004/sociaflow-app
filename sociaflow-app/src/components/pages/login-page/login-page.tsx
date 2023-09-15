import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.scss',
  shadow: true
})
export class LoginPage {
  @State() email: string;
  @State() password: string;

  handleInput(event) {
    if (event.target.name === 'email') {
      this.email = event.target.value;
    } else if (event.target.name === 'password') {
      this.password = event.target.value;
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    // Sending data to the backend
    const response = await fetch('https://yourbackend.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    });

    const data = await response.json();
    if (data.success) {
      // Handle successful login, e.g., store authentication token
    } else {
      // Handle error, e.g., show an error message to the user
    }
  }

  render() {
    return (
    <div class="login-container">
        <h2>Client Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Email:
            <input type="email" name="email" onInput={(e) => this.handleInput(e)} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onInput={(e) => this.handleInput(e)} />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
