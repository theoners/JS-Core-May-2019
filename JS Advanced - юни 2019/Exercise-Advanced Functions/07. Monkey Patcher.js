function solve(input) {
    if (input === "score") {
        return score(this)
    }
    input === "upvote" ? this.upvotes++ : this.downvotes++;

    function score(post) {
        let bonus = 0;
        if (post.upvotes + post.downvotes > 50) {
            bonus = Math.ceil(Math.max(post.upvotes, post.downvotes) * 0.25);
        }

        let score = post.upvotes - post.downvotes;
        let rating = "new";

        if (post.upvotes + post.downvotes < 10) {
            rating = 'new';

        } else if (score < 0) {
            rating = 'unpopular';

        } else if (post.upvotes / (post.upvotes + post.downvotes) > 0.66) {
            rating = 'hot';

        } else if (post.upvotes > 100 || post.downvotes > 100) {
            rating = 'controversial';

        }

        return [post.upvotes + bonus, post.downvotes + bonus, score, rating];
    }
}
