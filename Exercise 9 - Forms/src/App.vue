<template>
    <div class="container">
        <form @submit.prevent="submit" v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <app-fullname-input v-model="fullname"></app-fullname-input>
                    <!-- Mail -->
                    <div class="form-group">
                        <label>Mail</label>
                        <input type="text" v-model="mail" class="form-control"/>
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control"/>
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label>Store Data ?</label>
                        <label class="radio-inline">
                            <input type="radio" name="inlineRadioOptions" v-model="storeData" value="yes"> Yes
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="inlineRadioOptions" v-model="storeData" value="no"> No
                        </label>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullname }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                    <button type="button" class="btn btn-default" @click="reset">Reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullnameInput from './FullnameInput.vue'

    export default {
        components: {
            appFullnameInput: FullnameInput
        },
        data: function () {
            return {
                firstName: "",
                lastName: "",
                fullname: "",
                mail: "",
                password: "",
                storeData: "no",
                submitted: false
            }
        },
        methods: {
            submit: function() {
                this.submitted = true
            },
            reset: function() {
                this.firstName = ""
                this.lastName = ""
                this.fullname = ""
                this.mail = ""
                this.password = ""
                this.storeData = "no"
                this.submitted = false
            }
        }
    }
</script>

<style>
</style>
