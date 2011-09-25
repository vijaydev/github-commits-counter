$('h3.commit-group-heading').each(function() {
  $(this).append(' => Commits: ' + $(this).next('ol').children().size());
})

