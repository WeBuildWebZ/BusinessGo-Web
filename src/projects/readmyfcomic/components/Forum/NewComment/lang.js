export const getLanguage = langCode =>
  ({
    es: {
      leaveAComment: 'Deja tu comentario aquí!',
      postComment: 'Comentar!',
      commentAdded: { title: 'Comentario agregado', message: 'Gracias por tu comentario!!' }
    },
    en: {
      leaveAComment: 'Leave your comment in this awesome box!',
      postComment: 'Post comment!',
      commentAdded: { title: 'Comment added', message: 'Thanks for your great comment!' }
    }
  }[langCode]);
