import { BASE_URL } from "@/config/config";

export class NoteAPI {
  static async fetchAll() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      const notes = await response.json();
      return notes;
    } catch (error) {
      console.error("Error fetching notes:", error);
      throw error;
    }
  }

  static async fetchById(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch note");
      }
      const note = await response.json();
      return note;
    } catch (error) {
      console.error("Error fetching note:", error);
      throw error;
    }
  }

  static async create(note) {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error("Failed to create note");
      }
      const createdNote = await response.json();
      return createdNote;
    } catch (error) {
      console.error("Error creating note:", error);
      throw error;
    }
  }

  static async update(note) {
    try {
      const response = await fetch(`${BASE_URL}/${note.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error("Failed to update note");
      }
      const updatedNote = await response.json();
      return updatedNote;
    } catch (error) {
      console.error("Error updating note:", error);
      throw error;
    }
  }

  static async deleteById(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      throw error;
    }
  }
}
