export default {
  name: 'commnet',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'commnet',
      title: 'Comment',
      type: 'string',
    },

    {
      name: "username",
      title: "Username",
      type: "string"
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string"
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference to the tweet the comment is associated to",
      type: "reference",
      to: {
        type: "tweet"
      }
    }
    
  ]
}
