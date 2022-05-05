(oldUrl = 'https://www.elmejorblancodelonce.com.ar/imagenes/hogar14117.jpg') && undefined;
(newUrl = 'https://res.cloudinary.com/blanqueriawow/image/upload/v1651022698/image_28_hzntii.jpg') && undefined;
db.items.updateMany({project_code:'blanqueriawow', 'value.photo': oldUrl}, {$set: {'value.photo': newUrl}})