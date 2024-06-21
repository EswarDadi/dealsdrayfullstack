module.exports=(sequelize,DataTypes)=>{
    const Employee=sequelize.define("t_Employee",{
        f_Id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        f_Image:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        f_Name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        f_Email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        f_Mobile:{
            type:DataTypes.STRING,
            allowNull:false,


        },
        f_Designation:{
            type:DataTypes.STRING,
            allowNull:false,


        },
        f_Gender:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        f_Course:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
        
    })
    return Employee
 
}