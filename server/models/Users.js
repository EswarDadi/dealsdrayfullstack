module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("t_login",{
        f_sno:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        f_userName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        f_Pwd:{
            type:DataTypes.STRING,
            allowNull:false,
        }

    })
    return Users
}