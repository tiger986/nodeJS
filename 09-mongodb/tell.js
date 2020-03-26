//1.安装好mongodb


//2.配置环境变量，配置前再命令行执行mongo会报错（windows下使用mongo命令提示不是内部或外部命令。）。
//方法：我的电脑右键选择属性--》高级系统--》环境变量--》编辑系统变量path（在末尾增加C:\Program Files\MongoDB\Server\4.2\bin）(mongodb安装下的目录)
//配置完再在命令行执行mongo，即可看见相关信息


//3.在G盘(可任意盘)中新建文件夹data,在data文件夹中新建文件夹db。再再命令行执行mongod --dbpath g:\data\db  (指定数据库的目录)


//4.常用命令
//a.开始操作 mongo   b.查看命令提示 help  c.创建/切换数据库 use 数据库名  d.查询数据库 show dbs  e.查看当前使用的数据库 db/db.getName()
//f.现实当前DB状态 db.stats()  g.查看当前DB版本 db.version()  h.查看当前DB的链接机器地址 db.getMongo()  i.删除当前数据库 db.dropDatabase()


//5.collection集合的操作
//a.创建一个集合 db.createCollection('collectionName(集合名)',{size:20,capped:true,max:100}) (可以只填集合的名字)
//b.判断集合是否为定容量  db.collectionName(集合名).isCapped()
//c.得到指定名称的集合  db.getCollection('collectionName(集合名)')
//d.得到当前db的所有集合  db.getCollectionNames()
//e.现实当前db所有集合的状态  db.printCollectionStats()


//6.插入(insert/save)
//a.向集合里插入一条数据  db.collectionName(集合名).insertOne({'键':'值',……})  (键可以不加引号，值为数字类型时不能加引号)
//b.查看集合内容  db.collectionName(集合名).find()
//c.向集合里插入多条数据  db.collectionName(集合名).insertMany([{'键':'值',……},……])  
//d.向集合里插入一条或多条数据  db.collectionName(集合名).insert({'键':'值',……})/db.collectionName(集合名).insert([{'键':'值',……},……])
//e.向集合里插入一条或多条数据  db.collectionName(集合名).save({'键':'值',……})/db.collectionName(集合名).save([{'键':'值',……},……])


//7.修改(update)
//a.修改集合中的某一个内容  db.collectionName(集合名).updateOne({任意键名:'值'},{$set:{要修改的键名:'要修改成的值'}})  （’任意键名‘可以是将要修改的键名）
//b.1.修改合集中的内容(一个或多个)  db.collectionName(集合名).update({任意键名:'值'},{$set:{要修改的键名:'要修改成的值'}},true/false,true/false)
//(修改多个  db.collectionName(集合名).update({任意键名:'值'},{$set:{要修改的键名:'要修改成的值',要修改的键名:'要修改成的值'……}},true/false,true/false))
//b.2.要修改的值为数字，要在原来的基础上增加或减少多少  db.collectionName(集合名).update({任意键名:'值'},{$inc:{要修改的键名:要增加的数值/负要减少的数值}},true/false,true/false)
//(修改多个  db.collectionName(集合名).update({任意键名:'值'},{$inc:{要修改的键名:要增加的数值/负要减少的数值,要修改的键名:要增加的数值/负要减少的数值……}},true/false,true/false))
//b.3.混合使用  db.collectionName(集合名).update({任意键名:'值'},{$inc:{要修改的键名:要增加的数值/负要减少的数值,要修改的键名:要增加的数值/负要减少的数值……},$set:{要修改的键名:'要修改成的值',要修改的键名:'要修改成的值'……}},true/false,true/false)
//(如果第三个参数不写或是false，则当在集合中找不到‘任意键名’时就什么也不修改；如果第三个参数写true，则当在集合中找不到‘任意键名’时就会插入一条document。
// 如果第四个参数不写或是false，则当在集合中找到多个‘任意键’时就只修改位置在最前面的那条document；如果第四个参数写true，则当在集合中找到多个‘任意键’时就全部修改)


//8.删除(remove/delete)
//a.删除集合中的一个document  db.collectionName(集合名).remove({任意键名:'值'}) （此方法不会真正释放空间）
//b.删除集合中的一个document  db.collectionName(集合名).deleteOne({任意键名:'值'}) (删除符合条件的第一个document))
//c.删除集合中的多个document  db.collectionName(集合名).deleteMany({任意键名:'值'}) (删除符合条件的所有document))
//d.删除集合中的所有document  db.collectionName(集合名).deleteMany({})


//9.查询(find/distinct)
//db.collectionName(集合名).findOne({任意键名:'值',……})  查询集合中符合条件的第一条document
//db.collectionName(集合名).find({任意键名:'值',……})  查询集合中符合条件的所有document
//db.collectionName(集合名).find()  查询集合中所有document
//db.collectionName(集合名).find({age:{$gt:22}})  查询 age > 22 的document
//db.collectionName(集合名).find({age:{$lt:22}})  查询 age < 22 的document
//db.collectionName(集合名).find({age:{$gte:22}})  查询 age >= 22 的document
//db.collectionName(集合名).find({age:{$lte:22}})  查询 age <= 22 的document
//db.collectionName(集合名).find({age:{$gt:22,$lt:26}})  查询 age > 22且age < 26 的document
//db.collectionName(集合名).find({age:{$gt:22,$lte:26}})  查询 age > 22且age <= 26 的document
//db.collectionName(集合名).find({name:/ga/}) 查询name中包含ga的document
//db.collectionName(集合名).find({name:/^ga/}) 查询name中以ga开头的document
//db.collectionName(集合名).find({},{name:1})  查询指定列name的所有数据，可指定多个列db.collectionName(集合名).find({},{name:1,age:1,……})
//db.collectionName(集合名).find({条件},{name:1})  查询符合条件的指定列name的数据,可指定多个列（条件：一个或多个键值对、数字键值的范围、键值包含什么或以什么开头等）
//db.collectionName(集合名).find({},{name:0})  查询除了指定列name的所有数据，可指定多个列db.collectionName(集合名).find({},{name:0,age:0,……})
//db.collectionName(集合名).find({条件},{name:0})  查询符合条件的除了指定列name的数据,可指定多个列
//db.collectionName(集合名).find().sort({age:1})   查询集合中所有document,按age的值的升序查询
//db.collectionName(集合名).find({条件}).sort({age:1})   查询集合中符合条件的document,按age的值的升序查询
//db.collectionName(集合名).find().sort({age:-1})   查询集合中所有document,按age的值的降序查询
//db.collectionName(集合名).find({条件}).sort({age:-1})   查询集合中符合条件的document,按age的值的降序查询
//db.collectionName(集合名).find().limit(5)  查询集合中前5条document
//db.collectionName(集合名).find({条件}).limit(5)  查询集合中符合条件的document中的前5条document
//db.collectionName(集合名).find().skip(5)  查询集合中第5条之后的所有document
//db.collectionName(集合名).find({条件}).skip(5)  查询集合中符合条件的document中的第5条之后的所有document
//db.collectionName(集合名).find().limit(10).skip(5)  查询集合中第5条之后的前10条document
//db.collectionName(集合名).find({条件}).limit(10).skip(5)  查询集合中符合条件的document中的第5条之后的前10条document
//db.collectionName(集合名).find({$or:[{条件1},{条件2},……]})  查询集合中符合条件1或条件2的所有document
//db.collectionName(集合名).find().count()  查询集合中所有document的数量
//db.collectionName(集合名).find({条件}).count()  查询集合中符合条件的document的数量
//db.collectionName(集合名).distinct('任意键') 查询对任意键的值进行去重后的所有值

//10.各命令可以链式操作
//db.top10.find({time:{$gt:'2000',$lt:'2010'}},{'name':1,_id:0,time:1}).sort({time:-1}).limit(2).skip(1).count()

//11.limit与skip同时用时其位置无影响，sort位置不管在哪都优先执行
/*db.top10.find({time:{$gt:'2000',$lt:'2010'}},{'name':1,_id:0,time:1}).sort({time:-1}).limit(2).skip(1) 与
  db.top10.find({time:{$gt:'2000',$lt:'2010'}},{'name':1,_id:0,time:1}).skip(1).limit(2).sort({time:-1}) 查询出的结果一致*/

//展示