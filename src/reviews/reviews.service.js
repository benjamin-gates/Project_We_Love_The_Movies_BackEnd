const knex = require("../db/connection");

function destroy(reviewId){
    return knex("reviews").where({ review_id: reviewId }).del();
}