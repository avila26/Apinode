import {TypesUser} from "../model/TypesUser.js";

export const getTypes = async (req, res) => {
    try {
        const types = await TypesUser.findAll({
            attributes: { exclude: ["status"] },
            where: { status: 0 }
        });

        res.status(200).json({ 'types': types });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos' });
    }
}


export const store = async (req, res) => {
    try {
        const { type } = req.body;
        if (!type) {
          res.status(401).json({ message: "No se permiten campos vacios" });
        } else {
          const tp = await TypesUser.create({
            type: type,
          });
          res.status(201).json({ message: "Create sucessfull", type: tp });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const  updateTypeUser = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const  { type } = req.body;

        // Validación de la entrada
        if(!type){
            res.status(401).json('not input valided');
        }

        const typefinded = await TypesUser.findByPk(id);

        if (typefinded) {
            // Actualiza el tipo
            typefinded.set({type});
            await typefinded.save()
            res.status(200).json({message:'Actualizado correctamente', 'type': typefinded});
        }else{
            res.status(404).json('Type not found');
        }
    } 
    catch (error) {
        res.status(500).json({message: error.message});}
}


//Modifica el campo status a true para no mostrarla cuando vamos a mostrar
export const deleteTypeUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const typeFound = await TypesUser.findByPk(id);

        if (typeFound) {
            // Cambiar el estado a "eliminado"
            await typeFound.update({ status: true });

            return res.status(200).json({ message: 'Marcado como eliminado correctamente' , 'type': typeFound});
        } else {
            return res.status(404).json({ error: 'Type not found' });
        }
    } catch (error) {
        console.error('Error in deleteTypeUser:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// export const deleteTypeUser = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id);

//         const typeFound = await TypesUser.findByPk(id);

//         if (typeFound) {
//             // Cambiar el estado a "eliminado"
//             await typeFound.destroy({ status: true });

//             return res.status(200).json({ message: 'Marcado como eliminado correctamente' , 'type': typeFound});
//         } else {
//             return res.status(404).json({ error: 'Type not found' });
//         }
//     } catch (error) {
//         console.error('Error in deleteTypeUser:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };
