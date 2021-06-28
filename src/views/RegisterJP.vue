<template>
	<div class="register">
		<h1>作成する</h1>
		<router-link to="/register">English</router-link>
		<form @submit.prevent="Register">
			<input type="text" placeholder="メールアドレス" v-model="email" />
			<input type="password" placeholder="パスワード" v-model="password" />
			<input type="submit" value="Register" />
			<p>アカウントもうある? <router-link to="/loginJP">ここにロッグイン</router-link></p>
		</form>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import firebase from 'firebase';

	export default{
		setup() {
			const email = ref("");
			const password = ref("");

			const Register = () => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email.value,password.value)
					.then(user => {
						alert(user);
					})
					.catch(err => alert(err.message));
			}

			return { Register, email, password }
		}
	}
</script>