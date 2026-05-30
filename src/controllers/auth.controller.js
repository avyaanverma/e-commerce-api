import { userModel } from "../models/user.model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Description is required",
      });
    }

    const user = await userModel.findOne({
      email: email,
    });

    const checkPassword = user.comparePassword(password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Password do not match",
      });
    }

    const token = user.generateJWT();

    res.cookie("jwt_secret", token);

    return res.status(200).json({
      message: "Logged in successfully.",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }
    const userAlreadyExists = await userModel.findOne({
      email: email,
    });

    if (userAlreadyExists) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }
    const user = await userModel.create({
      name: name,
      email: email,
      password: password,
    });

    const token = user.generateJWT();

    res.cookie("jwt_secret", token);

    return res.status(200).json({
      message: "User Registered Successfully",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
