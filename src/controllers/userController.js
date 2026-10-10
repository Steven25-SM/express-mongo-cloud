import { userService } from '../services/userService.js';
const handleError = (res, err) => {
  if (err.name === 'CastError') return res.status(400).json({ message: 'ID inválido' });
  if (err.code === 11000) return res.status(409).json({ message: 'El correo ya existe' });
  if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
  console.error(err);
  return res.status(500).json({ message: 'Error interno del servidor' });
};
export const userController = {
  async getAll(req, res) {
    try { res.json(await userService.getAll()); } catch (err) { handleError(res, err); }
  },
  async getById(req, res) {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) { handleError(res, err); }
  },
  async create(req, res) {
    try { res.status(201).json(await userService.create(req.body)); }
    catch (err) { handleError(res, err); }
  },
  async update(req, res) {
    try {
      const user = await userService.update(req.params.id, req.body);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) { handleError(res, err); }
  },
  async remove(req, res) {
    try {
      const user = await userService.remove(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(204).end();
    } catch (err) { handleError(res, err); }
  }
};
