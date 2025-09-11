'use client';

import { useState } from 'react';

export default function ContactPageES() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredUnit: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {
      name: formData.name.trim() === '' ? 'El nombre es obligatorio' : '',
      email: formData.email.trim() === '' ? 'El correo es obligatorio' : '',
      message: formData.message.trim() === '' ? 'El mensaje es obligatorio' : ''
    };

    setErrors(newErrors);

    // If no errors, submit form (placeholder)
    if (Object.values(newErrors).every(error => error === '')) {
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredUnit: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-semibold text-lg">Ellavillages</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="/es" className="text-gray-700 hover:text-gray-900">Inicio</a>
              <a href="/es/about" className="text-gray-700 hover:text-gray-900">Acerca de</a>
              <a href="/es/properties" className="text-gray-700 hover:text-gray-900">Propiedades</a>
              <a href="/es/contact" className="text-gray-900 font-medium border-b-2 border-gray-900">Contacto</a>
              <div className="ml-4">
                <a href="/en/contact" className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">🇺🇸 EN</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ponte en Contacto
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¿Listo para encontrar tu nuevo hogar? ¿Tienes preguntas sobre nuestras propiedades? 
                Nos encantaría escucharte.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="tu.correo@ejemplo.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredUnit" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Unidad Preferida
                    </label>
                    <select
                      id="preferredUnit"
                      name="preferredUnit"
                      value={formData.preferredUnit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    >
                      <option value="">Selecciona un tipo de unidad</option>
                      <option value="1600-units">Unidades $1,600 (A, B, C, D)</option>
                      <option value="1800-units">Unidades $1,800 (E, F)</option>
                      <option value="any">Cualquier unidad disponible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors resize-vertical ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Cuéntanos qué estás buscando, fecha preferida de mudanza, o cualquier pregunta que tengas..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors font-medium"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white shadow-lg rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Visita Nuestra Oficina</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dirección</h4>
                      <p className="text-gray-600">
                        5420 Eglinton St<br />
                        Houston, TX 77026
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Horarios de Oficina</h4>
                      <p className="text-gray-600">
                        Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                        Sábado: 10:00 AM - 4:00 PM<br />
                        Domingo: Solo con cita previa
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <a
                        href="https://maps.google.com/?q=5420+Eglinton+St,+Houston,+TX+77026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Obtener Direcciones
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🗺️</span>
                      </div>
                      <span className="text-sm">Mapa Interactivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="tel:+13462682140"
                className="block text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">+1 346 268 2140</p>
              </a>

              <a
                href="mailto:ellavillages@gmail.com"
                className="block text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Correo</h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">ellavillages@gmail.com</p>
              </a>

              <a
                href="https://maps.google.com/?q=5420+Eglinton+St,+Houston,+TX+77026"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">5420 Eglinton St, Houston, TX 77026</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ellavillages. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}