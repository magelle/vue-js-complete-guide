<template>
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <quote-progress :progress="quoteCount" :max="maxQuotes"></quote-progress>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-md-offset-3" >
                <h4>Quote</h4>
                <quote-form @submit="addQuote"></quote-form>
            </div>
        </div>

        <div class="row">
            <quote v-for="(q, index) in quotes" 
            :quote="q" :id="index" 
            @clicked="removeQuote(index)"></quote>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-info text-center" role="alert">
                    Info: Click on a Quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteProgress from './component/QuoteProgress.vue'
    import QuoteForm from './component/QuoteForm.vue'
    import Quote from './component/Quote.vue'

    export default {
        components: {
            QuoteProgress,
            QuoteForm,
            Quote
        },
        data: function () {
            return {
                quotes: [],
                maxQuotes: 10
            }
        },
        computed: {
            quoteCount: function() { return this.quotes.length }
        },
        methods: {
            addQuote: function (quote) {
                if (this.quoteCount === this.maxQuotes) {
                    alert('Please remove quotes before adding more');
                    return;
                }
                this.quotes.push(quote)
            },
            removeQuote: function (index) {
                this.quotes = this.quotes.filter((_, i) => i !== index)
            }
        }
    }
</script>

<style>
</style>
