const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YnJ3ZmtwYm9vZ2Jtb2l3eWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA3NDAsImV4cCI6MjA1Mjg1Njc0MH0.N39c8Gdbgf6xp0TfmA793x5019YjAF3ZAJq2svw7kXk";
const SUPABASE_URL = "https://oybrwfkpboogbmoiwygs.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



async function handleLoginSubmit(event) {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);

    const { data, error } = await supa_base.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    loader.classList.add("hidden");

    alert(error);
  }
  if (data?.session !== null) {
    loader.classList.add("hidden");

    window.location.href = "dashboard.html";
  }
  console.log("data", data);
  console.log("error-login", error);
}
async function handleSignupSubmit(event){

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("username", email);
    console.log("password", password);


    const { data, error } = await supa_base.auth.signUp({
        email,
        password,

      })
    console.log("data", data);
    console.log("error", error);
}
