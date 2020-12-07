class Github {
  constructor() {
    this.client_id = "9effba5a97bf95cd802f";
    this.client_secret = "2d93ac26bc566b18836fb5fa2f134033e6318d46";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
