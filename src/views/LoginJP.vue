<template>
	<div class="login">
		<h1>ロッグイン</h1>
		<router-link to="/login">English</router-link>
		<form @submit.prevent="Login">
			<input type="text" placeholder="メールアドレス" v-model="email" />
			<input type="password" placeholder="パスワード" v-model="password" />
			<input type="submit" value="Login" />
			<p>アカウント必要? <router-link to="/registerJP">ここに作成する</router-link></p>
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

			const Login = () => {
				firebase
					.auth()
					.signInWithEmailAndPassword(email.value,password.value)
					.then(data => console.log(data))
					.catch(err => alert(err.message));
			}

			return { Login, email, password }
		}
	}
</script>