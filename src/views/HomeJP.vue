<template>
  <div class="home">
    <h1>ようこそ, {{ name }}</h1>
    <router-link to="/aboutJP">ホームについて</router-link>
    <br>
    <button class="logout" @click="Logout">ロッグアウト</button>
  </div>
</template>

<script>
	import { ref, onBeforeMount } from 'vue';
	import firebase from 'firebase';

	export default {
		setup() {
			const name = ref("");

			onBeforeMount(() => {
				const user = firebase.auth().currentUser;
				if (user) {
					name.value = user.email.split('@')[0];
				}
			});

			const Logout = () => {
				firebase
					.auth()
					.signOut()
					.then(() => console.log("Signed Out"))
					.catch(err => alert(err.message));
			}

			return { name, Logout }
		}
	}
</script>