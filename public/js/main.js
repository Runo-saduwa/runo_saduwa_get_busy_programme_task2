let profile = document.querySelector('#profile');

window.addEventListener('DOMContentLoaded', () => {
	profile.innerHTML = `<h1>Loading...</h1>`;
	fetch(`http://localhost:3000/profile`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				profile.innerHTML = `
              <div>
              <h4>Account Details</h4>
              <hr>
              <h3 class="text-dark">${data.name}</h3>
              <h6 class="lead text-secondary">username - ${data.username}</h6>
              <h6 class="lead text-secondary">email - ${data.email}</h6>
              <h6 class="lead text-secondary">phone - ${data.phone}</h6>
              <h6 class="lead text-secondary">website - ${data.website}</h6>
              <h6 class="lead text-secondary">company - ${data.company.name}</h6>
          
              <hr>
              <h4>Home Address</h4>
              <hr>
              <h6 class="lead text-secondary"> Street - ${data.address.street}</h6>
              <h6 class="lead text-secondary">Suite - ${data.address.suite}</h6>
              <h6 class="lead text-secondary">City - ${data.address.city}</h6>
              <h6 class="lead text-secondary">zip - ${data.address.zipcode}</h6>
         
              <hr>
             </div>

              `;
			}
		});
	});
});
